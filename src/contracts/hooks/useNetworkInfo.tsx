import { useEffect, useState } from 'react';
import { useNetwork } from 'wagmi';
import { watchNetwork } from '@wagmi/core'

export function useNetworkInfo() {
  const { chain, chains } = useNetwork();
  const [isSupported, setIsSupported] = useState<boolean>();
  const [chainId, setChainId] = useState<number>(5611);

  useEffect(() => {
    if (chain && chain.id) {
      setChainId(chain.id);  // Assuming that the 'chain' object has an 'id' property
      setIsSupported(!chain.unsupported);
    }
  }, [chain]);
  useEffect(() => {
    const unwatch = watchNetwork(() => {
      if(chain?.id){
        setChainId(chain?.id);  // Assuming that the 'chain' object has an 'id' property
      setIsSupported(!chain?.unsupported);
      }
      
    });

    return () => {
        unwatch();
    };
}, [chain]);

  return { chainId, isSupported };
}
