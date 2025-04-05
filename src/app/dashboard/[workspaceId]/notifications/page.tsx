"use client";
import { getNotifications } from "@/actions/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useQueryData } from "@/hooks/useQueryData";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Notifications = () => {
	const { data } = useQueryData(["user-notifications"], getNotifications);

	const { data: response, status } = data as {
		status: number;
		data: {
			notifications: {
				notification: {
					id: string;
					userId: string | null;
					content: string;
				}[];
				_count: {
					notification: number;
				};
			};
			invites: {
				id: string;
				content: string;
				accepted: boolean;
				sender: {
					firstname: string | null;
					lastname: string | null;
					email: string;
					image: string | null;
				} | null;
				WorkSpace: {
					name: string;
					type: string;
				} | null;
			}[];
		};
	};

	if (status !== 200) {
		return (
			<div className="flex justify-center items-center h-full w-full">
				<p>No Notification</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col pt-6 px-4">
			{/* NOTIFICATIONS */}
			<div className="flex flex-col">
				<h2 className="text-[18px] font-bold">Your Notifications ✨</h2>
				<p className="text-gray-500 font-light text-[14px]">
					All notifications you have from your team members, other workspaces and invites.
				</p>
			</div>

			{!response.notifications.notification.length ? (
				<div className="my-5 mx-auto">No notifications yet.</div>
			) : (
				response.notifications.notification.map((n) => (
					<div
						key={n.id}
						className="border-2 flex gap-x-3 items-center rounded-lg p-3 mt-3"
					>
						<Avatar>
							<AvatarFallback>
								<User />
							</AvatarFallback>
						</Avatar>
						<p>{n.content}</p>
					</div>
				))
			)}

			{/* INVITES */}
			<div className="flex flex-col mt-6">
				<h2 className="text-[18px] font-bold">Your Invites</h2>
				<p className="text-gray-500 font-light text-[14px]">
					If you are invited to join other workspaces, you will see the messages here.
				</p>
			</div>

			{!response.invites.length ? (
				<div className="my-5 mx-auto">No invites yet.</div>
			) : (
				response.invites.map((invite) => {
					const sender = invite.sender;
					const workspace = invite.WorkSpace;

					return (
						<div
							key={invite.id}
							className="border-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-x-5 rounded-lg p-4 mt-4"
						>
							<div className="flex items-center gap-x-3">
								<Avatar>
									<AvatarImage src={sender?.image || ""} />
									<AvatarFallback>
										<User />
									</AvatarFallback>
								</Avatar>
								<div className="flex flex-col">
									<p className="font-semibold text-sm">
										{sender?.firstname} {sender?.lastname}
									</p>
									<p className="text-xs text-gray-500">{sender?.email}</p>
								</div>
							</div>
							<div className="flex-1">
								<p className="text-sm">
									Invited you to join{" "}
									<span className="font-medium">{workspace?.name}</span>{" "}
									({workspace?.type?.toLowerCase()})
								</p>
							</div>
							<Link href={`${process.env.NEXT_PUBLIC_HOST_URL}/invite/${invite.id}`}>
								<Button disabled={invite.accepted} variant="default" className="ml-auto w-fit bg-indigo-600 text-white hover:bg-indigo-700">
									{invite.accepted ? 'Invite accepted' : 'Accept Invite'}
								</Button>
							</Link>
						</div>
					);
				})
			)}
		</div>
	);
};

export default Notifications;
