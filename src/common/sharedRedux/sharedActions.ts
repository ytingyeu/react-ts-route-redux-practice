import { createAction } from "@reduxjs/toolkit";

export const FETCH_IN_PROGRESS = "FETCH_IN_PROGRESS";
export const fetchInProgress = createAction(FETCH_IN_PROGRESS);
export type TFetchInProgress = ReturnType<typeof fetchInProgress>;

export const FETCH_TERNIMATED = "FETCH_TERNIMATED";
export const fetchTerminated = createAction(FETCH_TERNIMATED);
export type TFetchTerminated = ReturnType<typeof fetchTerminated>;
