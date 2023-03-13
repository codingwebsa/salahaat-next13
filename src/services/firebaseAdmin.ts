import admin from "firebase-admin";
import ServiceAccount from "../../firebase-secret.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      // @ts-ignore
      credential: admin.credential.cert(ServiceAccount),
    });
  } catch (error) {
    // @ts-ignore
    console.log("Firebase admin initialization error", error.stack);
  }
}

const db = admin.firestore();

export default admin;
export { db };
