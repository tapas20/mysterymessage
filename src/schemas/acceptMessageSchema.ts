import { z } from "zod";

export const AcceptingMessageSchema = z.object({
  acceptMessages: z.boolean(),
});
