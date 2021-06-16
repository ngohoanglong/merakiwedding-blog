
import { getAllPostsForHome } from "@lib/api";
import { fetcher, getKindWordsPageInfo } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import KindWords, { kindWords_template } from "@templates/kind-words/KindWords";

export default withBuilderForm({
  label: 'kind-words',
  displayName: 'kind-words',
  getPageInfo: getKindWordsPageInfo,
  onSubmit: async (variables) => {
    const saveMutation = `
        mutation updateKindWord(
              $data: JSON
              $locale: String
          ) {
            updateKindWord(input: {data: {data: $data}} locale:$locale) {
                kindWord{
                      data
                  }
              }
        }`;
    return await fetcher(
      {
        query: saveMutation,
        variables
      }
    );
  },
  template: kindWords_template,
})(KindWords)
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, blog: { posts: allPosts?.edges || [] } },
    revalidate: 300
  }
}
