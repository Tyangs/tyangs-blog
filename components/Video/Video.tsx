import React from 'react';

interface IVideoProps {
	src: string;
	autoPlay?: boolean;
	controls?: boolean;
	loop?: boolean;
	playsInline?: boolean;
}

const Video = (props: IVideoProps) => {
	const { src, autoPlay = false, controls = true, loop = false, playsInline = true } = props;

	return (
		<video
			width="100%"
			src={src}
			autoPlay={autoPlay}
			controls={controls}
			loop={loop}
			playsInline={playsInline}
		/>
	);
};

export default Video;
