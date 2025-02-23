function Iframe({ content }: { content: string }) {
  return <iframe srcDoc={content} className='tw-w-full' />;
}

export default Iframe;
