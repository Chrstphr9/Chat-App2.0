import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase-config'


export const Auth = () => {
    const signInWithGoogle = async () => {
         const result = await signInWithPopup(auth, provider)
         console.log(result)
    }
    return (
        < div className='auth'>
            <p> Sign In With Google To Continue</p>
            <button onClick={signInWithGoogle}> Sign In With Google</button>
        </div>
    )
}