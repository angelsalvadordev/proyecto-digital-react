import React from 'react'
import SocialButton from '../atoms/SocialButton'
const SocialContact = () => {
    return (
        <div className="social-contact flex flex-column">
            <SocialButton name="instagram" />
            <SocialButton name="twitter" />
            <SocialButton name="facebook" />
        </div>
    )
}

export default SocialContact
