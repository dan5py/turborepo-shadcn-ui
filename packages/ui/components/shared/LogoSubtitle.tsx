'use client'
import { app } from "@ui/utils/app"
import { getRemoteConfig, fetchAndActivate, getString } from "firebase/remote-config"
import { useState, useEffect } from "react"

const LogoSubtitle = () => {
    const [tag, setTag] = useState<string>('')
    useEffect(() => {
        const remoteConfig = getRemoteConfig(app);
        remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
        fetchAndActivate(remoteConfig)
        .then(() => {
            const bum_string = getString(remoteConfig, 'bum_tag')
            setTag(bum_string)
        })
        .catch((err) => {
        });
    },[])
    return (
        <sup className='text-xs text-neutral-400'>{process.env.NODE_ENV === 'development' ? 'Dev' : tag ? tag : 'Beta'}</sup>
    )
}

export default LogoSubtitle