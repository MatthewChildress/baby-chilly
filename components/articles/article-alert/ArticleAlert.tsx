import Container from '../../common/container/Container';
export interface IArticleAlert {
  sampleTextProp?: string;
  preview: any;
}

const ArticleAlert: React.FC<IArticleAlert> = ({ preview }) => {
  return (
    <div>
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Here be previews.{'  '} Click here
              {'  '} to exit preview mode.
            </>
          ) : (
            <>
              Random text filler for later{'  '}{' '}
              <a
                href={`https://www.google.com`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                Homie
              </a>{' '}
              .{' '}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ArticleAlert;
