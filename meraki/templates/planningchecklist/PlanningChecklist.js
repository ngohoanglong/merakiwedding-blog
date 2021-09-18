
import Button from "@components/button";
import Layout from "@components/layout";
import SourceProvider, { useSource } from "@providers/source";
import { createFields } from "@providers/tinacms/helpers";
import { planningchecklistSeo } from "data/seo";
import { get } from "lodash";
import Seo from "meraki/components/Seo";
import { useRouter } from "next/router";
import { useState } from "react";

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
  const router = useRouter()
  const { posted } = router.query
  const [hidePosted, setHidePosted] = useState(false)
  return <SourceProvider source={{
    en: source
  }}>
    <Layout preview={preview}>
      <div className="max-w-6xl px-2 sm:px-6 md:px-12 mx-auto lg:py-12 ">
        <article>
          <Seo {...planningchecklistSeo} />
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
            {posted && !hidePosted ? <div className="flex flex-col items-center">
              <div className=' w-full flex flex-col items-center justify-center space-y-6 text-center relative'>
                <div className="text-2xl sm:text-3xl lg:text-5xl text-center !leading-relaxed w-full max-w-6xl">{get(source, 'data.success.title', 'Thank you')}</div>
                <a download="planningchecklist.pdf" href={router.locale === 'vi' ? '/planningchecklist-vie.pdf' : '/planningchecklist-eng.pdf'} className="px-6 py-2 bg-primary text-white font-sweetsans uppercase hover:bg-opacity-70 focus:ring focus:outline-none ring-element-4 ring-offset-2 transition-all duration-300 ease-in-out flex space-x-6 items-center leading-loose" size='large'>
                  <div className="icon text-xl"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.887 5.2l-.964-.165A2.5 2.5 0 103.5 10H6v1H3.5a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.501 2.501 0 0113.5 11H10v-1h3.5a1.5 1.5 0 00.237-2.981L12.7 6.854l.216-1.028a4 4 0 10-7.843-1.587l-.185.96z" /><path fillRule="evenodd" d="M5 12.5a.5.5 0 01.707 0L8 14.793l2.293-2.293a.5.5 0 11.707.707l-2.646 2.646a.5.5 0 01-.708 0L5 13.207a.5.5 0 010-.707z" clipRule="evenodd" /><path fillRule="evenodd" d="M8 6a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 6z" clipRule="evenodd" /></svg></div>
                  <div>{get(source, 'data.success.dowload_button_text', 'Download')}</div></a>
              </div>
            </div> : <Blocks />}
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
  },
    'finalQuestion', {
      name: 'buttonText',
      label: 'send button text',
      component: 'text',
    }, {
      label: 'success',
      name: 'success',
      component: 'group',
      fields: [
        {
          label: 'title',
          name: 'title',
          component: 'text',
        },
        {
          label: 'dowload button text',
          name: 'dowload_button_text',
          component: 'text',
        }
      ]
    }]),

};
export default PlanningChecklist