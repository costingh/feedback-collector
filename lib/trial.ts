import { auth, currentUser } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";

const DAY_IN_MS = 86_400_000;
const TRIAL_PERIOD_DAYS = 14;

export const checkTrial = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const user = await currentUser();
  
  if (!user) {
    return false;
  }

  const trialEndDate = new Date(user.createdAt).getTime() + (TRIAL_PERIOD_DAYS * DAY_IN_MS);
  const isTrialValid = trialEndDate > Date.now();

  return true; // isTrialValid
};

export const getUserTrialData = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const user = await currentUser();
  
  if (!user) {
    return false;
  }

  const trialEndDate = new Date(user.createdAt).getTime() + (TRIAL_PERIOD_DAYS * DAY_IN_MS);

  return {trialEndDate, trialStartData: user.createdAt};
};