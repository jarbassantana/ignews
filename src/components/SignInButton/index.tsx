import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {

    const { data: session } = useSession()

    return session ? (
        <button
            className={styles.signInButton}
            type="button"
        >
            <FaGithub color="#04d361" />
            Jarbas Santana
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            className={styles.signInButton}
            type="button"
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            Sign in with GitHub
        </button>
    )
}