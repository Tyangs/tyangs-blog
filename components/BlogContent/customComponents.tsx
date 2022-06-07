import { getAnchorByTitle } from '@utils/string';
import { HeadingProps } from 'react-markdown/lib/ast-to-react';

import styles from './index.module.scss';

export const customComponents = {
	// h1: ({ children }: HeadingProps) => (
	// 	<a
	// 		className={styles['heading-anchor']}
	// 		href={`#${getAnchorByTitle(children[0] as string)}`}
	// 	>
	// 		<h1>{children[0]}</h1>
	// 	</a>
	// ),
	h2: ({ children }: HeadingProps) => (
		<a
			className={styles['heading-anchor']}
			href={`#${getAnchorByTitle(children[0] as string)}`}
		>
			<h2>{children[0]}</h2>
		</a>
	),
	h3: ({ children }: HeadingProps) => (
		<a
			className={styles['heading-anchor']}
			href={`#${getAnchorByTitle(children[0] as string)}`}
		>
			<h3>{children[0]}</h3>
		</a>
	),
	h4: ({ children }: HeadingProps) => (
		<a
			className={styles['heading-anchor']}
			href={`#${getAnchorByTitle(children[0] as string)}`}
		>
			<h4>{children[0]}</h4>
		</a>
	),
	h5: ({ children }: HeadingProps) => (
		<a
			className={styles['heading-anchor']}
			href={`#${getAnchorByTitle(children[0] as string)}`}
		>
			<h5>{children[0]}</h5>
		</a>
	),
	h6: ({ children }: HeadingProps) => (
		<a
			className={styles['heading-anchor']}
			href={`#${getAnchorByTitle(children[0] as string)}`}
		>
			<h6>{children[0]}</h6>
		</a>
	),
};
