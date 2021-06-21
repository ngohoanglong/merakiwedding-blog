
import { getGalleryPageInfoBySlug, updatePageInfo } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import GalleryDetail, { galleryDetail_template } from "@templates/galleryDetail/GalleryDetail";

export default withBuilderForm({
  label: 'galleryDetail',
  displayName: 'Gallery Details',
  getPageInfo: getGalleryPageInfoBySlug,
  onSubmit: updatePageInfo,
  template: galleryDetail_template,
})(GalleryDetail)
export async function getStaticProps({ preview = false }) {
  return {
    props: {},
  }
}
export const getStaticPaths = async () => {

  return {
    paths: [],
    fallback: true
  }
}
