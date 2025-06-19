import React from 'react';

const Featured_Video = () => {
    return (
        <div className="relative min-w-full h-[50vh] md:h-[80vh] bg-black">

            {/* Background Video */}
            <video
                className="min-w-full h-full object-fit"
                src="/videos/FeaturedVideo.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

        </div>
    );
};

export default Featured_Video;
