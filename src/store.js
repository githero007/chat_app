import { proxy } from "valtio";
import { onAuthStateChanged } from "firebase/auth";
const state = proxy ({
    user : null,
}
)
export default state;