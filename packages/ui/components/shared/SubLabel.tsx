'use client'
import { app } from '@ui/utils/app'
import { fetchAndActivate, getRemoteConfig, getString } from 'firebase/remote-config'
import { useEffect, useState } from 'react'

type Props = {
  mini?: boolean
}
const SubLabel = ({ mini }: Props) => {
  const [tag, setTag] = useState<string>('')
  useEffect(() => {
      const remoteConfig = getRemoteConfig(app);
      remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
      fetchAndActivate(remoteConfig)
      .then(() => {
          const bum_string = getString(remoteConfig, 'sub_tag')
          setTag(bum_string)
      })
      .catch((err) => {
      });
  },[])
  if (mini) return <span className='px-1.5 py-0.5 text-xs text-black bg-white rounded-md'>{tag || 'Плюс'}</span>
  return <span className='px-2 py-1 text-xs text-black bg-white rounded-md'>{tag || 'Плюс'}</span>
}

export default SubLabel