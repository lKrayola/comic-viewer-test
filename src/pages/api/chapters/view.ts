// next
import { NextApiRequest, NextApiResponse } from "next";
import PocketBase from "pocketbase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const chapterId = req.query.id?.toString();

  const pb = new PocketBase(process.env.POCKETBASE_API_URL);

  // const authData = await pb.admins.authWithPassword(
  //   `${process.env.POCKETBASE_ADMIN_EMAIL}`,
  //   `${process.env.POCKETBASE_ADMIN_PASSWORD}`
  // );
  // after the above you can also access the auth data from the authStore
  // console.log(pb.authStore.isValid);
  // console.log(pb.authStore.token);
  // console.log(pb.authStore.model.id);

  try {
    const record = await pb.collection("chapter").getOne(chapterId || "", {
      expand: "pages",
    });

    // console.warn(record);
    // console.warn(record.expand.pages);
    // debugger;

    return res.status(200).json({ record });
  } catch (err: any) {
    console.log(err);

    return res
      .status(err.response.status || 500)
      .json({ message: err.response.message, code: err.response.code });
  }
}
