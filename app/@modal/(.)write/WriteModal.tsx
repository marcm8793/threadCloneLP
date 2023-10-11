"use client";
import { usePathname, useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import WritePostForm, { WritePostFormValues } from "@/app/write/WritePostForm";
import { createPost } from "@/app/write/write-post.action";

export default function WriteModal({
  user,
  createPost,
}: {
  user: User;
  createPost: (values: WritePostFormValues) => Promise<string>;
}) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Dialog
      open={pathname === "/write"}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <WritePostForm user={user} onSubmit={createPost} />
      </DialogContent>
    </Dialog>
  );
}
