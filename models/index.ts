// Define an interface for User data
// @Properties
// - id: An optional field representing the user's ID. It is of type number.
// - uid: An optional field representing the user's UID (unique identifier). It is of type string.
// - name: An optional field representing the user's name. It is of type string.
// - email: A required field representing the user's email. It is of type string.

import { Tones } from "./tones";

// - profilepic: A required field representing the URL of the user's profile picture. It is of type string.
export type LoginUser = {
   id?: number;
   firebase_id?: string;
   name?: string;
   email: string;
   profilepic: string;
}

export type OldGenerateMessage = {
   prompt: string;
   model: string;
   input_message: string;
   tone_id: number;
   feature_id: number;
}


export type GenerateMessage = {
   input_message: string;
   tone_id: number;
   feature_id: number;
}


export type OldUserGenerateMessage = {
   user_id?: string;
   prompt: string;
   model: string;
   input_message: string;
   tone_id: number;
   feature_id: number;
}


export type UserGenerateMessage = {
   user_id?: string;
   input_message: string;
   tone_id: number;
   feature_id: number;
}



export type PromptMessage = {
   id : number;
   date_time : Date;
   input_message : string;
   result_message : string;
   user_id : number;
   tone_id : number;
   tone? : string;
   feature_id : number;
   feature?: number;
}