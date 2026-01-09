type PageImageProps = {
  imgUrl: string;
};

export default function PageImage({imgUrl}: PageImageProps) {
  return <img src="imgUrl" alt="image goes here" />;
}
