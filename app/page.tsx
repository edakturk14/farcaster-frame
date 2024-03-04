import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Pick random follower!',
      action: 'post_redirect',
    },
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    }
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Frames tutorial',
  description: 'Fun time building with Frames',
  openGraph: {
    title: 'Frames tutorial',
    description: 'Fun time building with Frames',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Welcome to my frames playground!</h1>
    </>
  );
}
