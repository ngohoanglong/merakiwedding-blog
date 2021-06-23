import cn from 'classnames'
import { useRouter } from 'next/router'
import { EXAMPLE_PATH } from '../lib/constants'
import Container from './container'

export default function Alert({ preview }) {
  const { asPath } = useRouter()
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href={"/edit" + asPath}
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here to edit
              </a>{' '}

            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
