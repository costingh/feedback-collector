"use client";
import React, { useEffect, useState } from "react";

import FormWidget from "@/components/forms/form-editor/FormWidget";
import { LoadingSpinner } from "../animations/loading-spinner";

const EmbedFormComponent = ({
	params,
	searchParams,
}: {
	params: { formUrl: string };
	searchParams: { raw?: string; centered?: string };
}) => {
	const [form, setForm] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://feedbackz.co/api/form/embed/${params.formUrl}`
				);
				const data = await response.json();
				setForm(data.data?.form);
			} catch (error) {
				console.error("Error fetching form:", error);
				setForm(null);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [params.formUrl]);

	if (loading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<span className="inline-block">
					<LoadingSpinner size={30} />
				</span>
			</div>
		);
	}

	return (
		<main className="w-screen bg-cover bg-center">
			<div className="h-full w-full py-4">
				{form && (
					<FormWidget
						formUrl={params.formUrl}
						isRaw={searchParams.raw || ""}
						isCentered={searchParams.centered}
						form={form}
						isSearchingForm={false}
					/>
				)}
			</div>
		</main>
	);
};

export default EmbedFormComponent;
