import MailForm from "@/components/MailForm/MailForm";
import { Dialog } from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h2 className="font-semibold text-2xl mb-4">お問い合せフォーム</h2>
      <MailForm />
      <Dialog />
    </main>
  );
}
