import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getUnusedReviewFromSheet, markReviewUsedInSheet } from "./sheets.server";

// Server function to get a random unused review from Google Sheets
export const getUnusedReviewFn = createServerFn({ method: "POST" })
  .validator(z.object({ starRating: z.number().min(3).max(5) }))
  .handler(async ({ data }) => {
    try {
      const result = await getUnusedReviewFromSheet(data.starRating);
      return result;
    } catch (error: any) {
      console.error("Server function getUnusedReviewFn error:", error);
      return { error: "failed_to_fetch" };
    }
  });

// Server function to mark a review as used in Google Sheets
export const markReviewUsedFn = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string().min(1) }))
  .handler(async ({ data }) => {
    try {
      const result = await markReviewUsedInSheet(data.id);
      return result;
    } catch (error: any) {
      console.error("Server function markReviewUsedFn error:", error);
      return { error: "failed_to_update" };
    }
  });
