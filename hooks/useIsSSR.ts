import { useEffect, useState } from 'react';

export const useIsSSR = () => {
	const [isSSR, setIsSSR] = useState<boolean>(true);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsSSR(false);
		}
	}, []);

	return isSSR;
};
