
import Button from "@components/button";
import Layout from "@components/layout";
import SourceProvider, { useSource } from "@providers/source";
import { createFields } from "@providers/tinacms/helpers";
import { useRouter } from "next/router";

const Blocks = () => {
  const router = useRouter()
  const { get } = useSource()
  return <div >
    <form action="/api/planningchecklist" method="GET" className="flex flex-col items-center" style={{
    }}>
      <input name="locale" value={router.locale} className="hidden" />
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center !leading-relaxed w-full max-w-6xl">{get('data.title')}</h2>
      <div className="text-center mt-6 mb-14">{get('data.description')}</div>
      <div className="w-full grid grid-cols-2 gap-x-6 gap-y-10">
        {
          get('data.questions', []).map((p, i) => {
            return (
              <div key={i} className="col-span-2 md:col-span-1 !leading-relaxed space-y-6">
                <div className="font-bold leading-relaxed">{i + 1}. {p.title}</div>
                <div className="pl-6 space-y-6 flex flex-col">
                  {
                    (p.answers || []).map((a, j) => {
                      return (
                        <label key={j} className="space-x-4 flex items-start"><input className="w-4 h-4" name={`${p.title}`} value={a} type="checkbox" /><div className="leading-4">{a}</div></label>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
        {get('data.finalQuestion') && <div className="col-span-2 leading-relaxed space-y-6 flex flex-col md:items-center">
          <div className="font-bold w-full md:text-center leading-relaxed">{get('data.questions', []).length + 1}. {get('data.finalQuestion')}</div>
          <div className="pl-6 space-y-6 flex flex-col max-w-2xl w-full">
            <input className="block rounded appearance-none bg-white px-3 py-2 border border-gray-400 w-full " name={get('data.finalQuestion')} />
          </div>
        </div>}
      </div>
      <div className="w-full flex justify-center pt-12">
        <Button type="submit" style={{ minWidth: '120px', padding: '0.5rem 2rem' }} size={'large'} type="submit">{get('data.buttonText')}</Button>
      </div>
    </form>
  </div>
}
const PlanningChecklist = ({ source, preview }) => {
  return <SourceProvider source={{
    en: source
  }}>
    <Layout preview={preview}>
      <div className="max-w-6xl px-2 sm:px-6 md:px-12 mx-auto lg:py-12 ">
        <article>
          {/* <Seo {...createPostDetailSeo(source, router)} /> */}
          <style>
            {`body{
              background:#eae4df;
            }
            footer{
              background:transparent!important
            }`
            }
          </style>
          <div className="p-6 py-10 md:p-20 bg-white">
            <Blocks />
          </div>
        </article>
      </div>
    </Layout>
  </SourceProvider>

}






export const planningchecklist_template = {
  // label: "Hero",
  defaultItem: {
    "title": "Cảm ơn bạn dành sự quan tâm cho Meraki và template checklist do tụi mình thực hiện",
    "description": "Trước khi nhận file download, bạn giúp tụi mình trả lời vài câu hỏi khảo sát bên dưới nhé :)",
    "buttonText": "Submit and Download",
    "questions": [
      {
        "answers": [
          "Google Search",
          "Facebook",
          "Instagram",
          "Được bạn bè giới thiệu",
          "Khác: ........."
        ],
        "title": "Bạn biết đến tụi mình qua kênh nào?"
      },
      {
        "title": "Bạn là Cô dâu/Chú rể hay đang quan tâm đến công việc Wedding Planner?",
        "answers": [
          "Cô dâu",
          "Chú rể",
          "Quan tâm đến công việc Wedding Planner",
          "Khác: ........."
        ]
      },

    ],
    "finalQuestion": "Bạn đang sinh sống ở thành phố nào?"
  },
  fields: createFields(['title', 'description', {
    name: 'questions',
    lable: "questions",
    component: 'group-list',
    itemProps: (item, i) => {
      return ({
        key: item.name,
        label: item.title || item.name
      })
    },
    fields: createFields([
      'title',
      {
        name: 'answers',
        lable: "answers",
        component: 'list',
        field: {
          component: 'text'
        }
      }
    ])
  }, 'finalQuestion', {
      name: 'buttonText',
      label: 'send button text',
      component: 'text',
    }]),

};
export default PlanningChecklist