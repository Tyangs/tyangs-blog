import { getAnchorByTitle } from '@utils/string';
import { HeadingProps } from 'react-markdown/lib/ast-to-react';

import styles from './index.module.scss';

export const customComponents = {
	// h1: ({ children }: HeadingProps) => (
	// 	<a
	// 		className={styles['heading-anchor']}
	// 		id={getAnchorByTitle(children[0] as string)}
	// 	>
	// 		<h1>{children[0]}</h1>
	// 	</a>
	// ),
	h2: ({ children }: HeadingProps) => (
		<h2 id={getAnchorByTitle(children[0] as string)}>{children[0]}</h2>
	),
	h3: ({ children }: HeadingProps) => (
		<h3 id={getAnchorByTitle(children[0] as string)}>{children[0]}</h3>
	),
	h4: ({ children }: HeadingProps) => (
		<h4 id={getAnchorByTitle(children[0] as string)}>{children[0]}</h4>
	),
	h5: ({ children }: HeadingProps) => (
		<h5 id={getAnchorByTitle(children[0] as string)}>{children[0]}</h5>
	),
	h6: ({ children }: HeadingProps) => (
		<h6 id={getAnchorByTitle(children[0] as string)}>{children[0]}</h6>
		// </a>
	),
};
