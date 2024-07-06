import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "ユーザー名は2文字以上で入力してください" }),
  subject: z.string().min(2, {
    message: "件名は2文字以上で入力してください",
  }),
  email: z.string().email({ message: "メールアドレスが正しくありません" }),
  content: z
    .string()
    .min(10, { message: "内容は10文字以上で入力してください" })
    .max(160, { message: "内容は160文字以下で入力してください" }),
});