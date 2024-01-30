import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import { CatsTypes } from "../types/catsTypes";

export const getAllCats = createAsyncThunk<CatsTypes[], void>(
  "cats/getAllCats",
  async (_, thunkAPI) => {
    try {
      const config: AxiosRequestConfig = {
        headers: {
          "x-api-key":
            "live_LAECFqMCPXp55pybnwely9j96SwFBdySfq6NgT7qOk5j92x5w0urExO4RtmKyfdw",
        },
      };

      const response = await axios.get<CatsTypes[]>(
        "https://api.thecatapi.com/v1/images/search?limit=15",
        config
      );

      if (!response.data) {
        throw new Error("No data received");
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error error");
    }
  }
);
