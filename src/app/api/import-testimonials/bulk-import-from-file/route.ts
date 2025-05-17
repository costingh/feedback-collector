import { NextResponse } from "next/server";
import { client } from "@/lib/prisma";
import { generateUniqueId } from "@/lib/utils";
import { currentUser } from '@clerk/nextjs/server';

export async function POST(req: Request) {
	try {
		const { workspaceId, testimonials } = await req.json();

		if (!workspaceId || !Array.isArray(testimonials)) {
			return NextResponse.json({ error: "Invalid input." }, { status: 400 });
		}

		const user = await currentUser();

		if (!user) {
			return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
		}

		const created = [];
		const skipped = [];

		const existingGhostForm = await client.form.findFirst({
			where: {
				userId: user.id,
				workspaceId,
				isGhostForm: true,
			},
		});

		let ghostForm;

		if (!existingGhostForm) { 
			ghostForm = await client.form.create({
				data: {
					userId: user.id,
					workspaceId,
					name: "",
					backgroundColor: "",
					brandLogo: '',
					brandName: '',
					primaryColor: "",
					withAnimatedBg: false,
					title: "",
					description:'',
					textareaPlaceholder: "",
					buttonLabel: "",
					published: false,
					isPaused: false,
					pausedUntil: null,
					url: '/p/' + generateUniqueId(),
					customUrl: "",
					thankYouPageTitle: '',
					thankYouPageMessage: '',
					thankYouCustomURL: '',
					isGhostForm: true,
				},
			});
		} else {
			ghostForm = existingGhostForm;
		}

		for (const t of testimonials) {
			const email = t.email?.trim().toLowerCase();

			if (email) {
				const exists = await client.formResponse.findFirst({
					where: {
						email,
						formId: ghostForm.id,
					},
				});

				if (exists) {
					skipped.push({ email, reason: "duplicate" });
					continue;
				}
			}

			const result = await client.formResponse.create({
				data: {
					stars: Number(t.rating) || 0,
					message: t.message || "",
					email: email || "",
					name: t.name || "",
					company: t.company || "",
					jobTitle: t.job_title || "",
					website: t.website || "",
					formId: ghostForm.id,
					avatar: t.photo || "",
					logo: "",
					video: t.video_url || "",
					approved: false,
					source: 'imported_from_file',
				},
			});

			created.push(result);
		}

		return NextResponse.json({
			createdCount: created.length,
			skippedCount: skipped.length,
			skipped,
		});
	} catch (error) {
		console.error("[BULK_IMPORT_ERROR]", error);
		return new NextResponse("Bulk import failed", { status: 500 });
	}
}
