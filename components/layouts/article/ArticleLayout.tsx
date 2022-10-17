import Seo from '../../common/seo/Seo';
export interface IArticleLayout {
  children: React.ReactNode;
  preview?: boolean | undefined;
}

const ArticleLayout: React.FC<IArticleLayout> = ({ children }) => {
  return (
    <>
      <Seo />
      <div className="min-h-screen">
        {/* <ArticleAlert preview={preview} /> */}
        <div>{children}</div>
      </div>
    </>
  );
};

export default ArticleLayout;
