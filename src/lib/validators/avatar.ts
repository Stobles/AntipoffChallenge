import { z } from "zod";

export const AvatarChangeValidator = z.object({
  url: z.string().min(1, "Строка не должна быть пустой."),
});

export type AvatarChangeRequest = z.infer<typeof AvatarChangeValidator>;
