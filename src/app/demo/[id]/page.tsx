import BasicDemo from '@/components/demo/BasicDemo';
import CardDemoSCN from '@/components/demo/CardDemoSCN';
import React, { FunctionComponent } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FunctionComponent<PageProps> = async ({ params }) => {
  const { id } = await params;

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {id === '1' && <BasicDemo />}
      {id === '2' && <CardDemoSCN />}
      {id !== '1' && id !== '2' && <div>Invalid ID</div>}
    </div>
  );
};

export default Page;
