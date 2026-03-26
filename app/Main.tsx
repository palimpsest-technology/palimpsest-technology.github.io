import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'
import News from './News'

const MAX_DISPLAY = 10000

function formatNames(names) {
  if (names.length === 0) return ''
  if (names.length === 1) return names[0]
  if (names.length === 2) return names.join(' and ')

  return names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1]
}

function SectionHeader({ children }) {
  return <h2 className="sticky top-0 pt-1 text-xl">{children}</h2>
}

function BodyText({ children }) {
  return (
    <div className="text-gray-500 transition-all duration-100 ease-out hover:text-gray-200">
      {children}
    </div>
  )
}

function PaperItem(post) {
  const { slug, venue, authors, link, memo, video, title, summary } = post
  return (
    <li key={slug} className="py-6">
      <article>
        <div className="space-y-1">
          {/* <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </dd>
          </dl> */}
          <div>
            <div className="space-y-1">
              <div>
                <h2 className="">
                  <span className="font-bold">
                    {title}, {formatNames(authors)}, {venue}
                  </span>
                  <span>{memo ? ' ' + memo : ''}</span>
                </h2>
                <p>
                  {link ? (
                    <Link
                      className="animate-shaking rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                      href={link}
                    >
                      {' '}
                      [link]{' '}
                    </Link>
                  ) : null}
                  {video ? (
                    <Link
                      className="animate-shaking rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                      href={video}
                    >
                      {' '}
                      [video]{' '}
                    </Link>
                  ) : null}
                </p>

                {/* <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div> */}
              </div>
              <BodyText>{summary}</BodyText>
            </div>
            {/* <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div> */}
          </div>
        </div>
      </article>
    </li>
  )
}

function PosterDemoItem(post) {
  const { slug, venue, authors, link, video, award, title, summary } = post
  return (
    <li key={slug} className="py-6">
      <article>
        <div className="space-y-1">
          {/* <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </dd>
          </dl> */}
          <div>
            <div className="space-y-1">
              <div>
                <h2 className="">
                  <span className="font-bold">
                    {title}, {formatNames(authors)}, {venue}
                  </span>
                  <span className="text-primary-300">{award ? ' ' + award : ''}</span>
                </h2>

                {/* <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div> */}
                <p>
                  {link ? (
                    <Link
                      className="rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                      href={link}
                    >
                      {' '}
                      [link]{' '}
                    </Link>
                  ) : null}
                  {video ? (
                    <Link
                      className="animate-shaking rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                      href={video}
                    >
                      {' '}
                      [video]{' '}
                    </Link>
                  ) : null}
                </p>
              </div>

              {/* <BodyText>{summary}</BodyText> */}
            </div>
            {/* <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div> */}
          </div>
        </div>
      </article>
    </li>
  )
}

function PresentationItem(post) {
  const { slug, venue, authors, memo, award, title, summary } = post
  return (
    <li key={slug} className="py-6">
      <article>
        <div className="space-y-1">
          {/* <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </dd>
          </dl> */}
          <div>
            <div className="space-y-1">
              <div>
                <h2 className="">
                  <span className="font-bold">
                    {title}, {formatNames(authors)}, {venue}
                  </span>
                  <span>{memo ? ' ' + memo : ''}</span>
                  <span className="text-primary-300">{award ? ' ' + award : ''}</span>
                </h2>

                {/* <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div> */}
              </div>
              {/* <BodyText>{summary}</BodyText> */}
            </div>
            {/* <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div> */}
          </div>
        </div>
      </article>
    </li>
  )
}

function UnpublishedItem(post) {
  const { slug, venue, authors, collaboration, link, video, award, title, summary } = post
  return (
    <li key={slug} className="py-6">
      <article>
        <div className="space-y-1">
          {/* <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </dd>
          </dl> */}
          <div>
            <div className="space-y-1">
              <div>
                <h2 className="">
                  <span className="font-bold">
                    {title}
                    <br />
                    {/* {authors?formatNames(authors):null},{' '} */}
                    Collaboration with {collaboration ? formatNames(collaboration) : null}
                  </span>
                </h2>

                {/* <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div> */}
                <p>
                  {link ? (
                    <Link
                      className="rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                      href={link}
                    >
                      {' '}
                      [link]{' '}
                    </Link>
                  ) : null}
                  {video ? (
                    <Link
                      className="animate-shaking rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                      href={video}
                    >
                      {' '}
                      [video]{' '}
                    </Link>
                  ) : null}
                </p>
              </div>
              {/* <BodyText>{summary}</BodyText> */}
            </div>
            {/* <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div> */}
          </div>
        </div>
      </article>
    </li>
  )
}

function ArtworkItem(post) {
  const {
    slug,
    exhibition,
    start,
    end,
    gallery,
    city,
    authors,
    collaboration,
    award,
    link,
    video,
    title,
    summary,
  } = post
  return (
    <li key={slug} className="py-6">
      <article>
        <div className="space-y-1">
          {/* <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </dd>
          </dl> */}
          <div>
            <div className="space-y-1">
              <div>
                <h2 className="">
                  <span className="font-bold">
                    {title}
                    {', '}
                    {exhibition}
                    {', '}
                    {gallery == '' ? '' : gallery + ', '}
                    {city}
                    {', '}
                    <time dateTime={start}>{formatDate(start, siteMetadata.locale)}</time> {' - '}
                    <time dateTime={end}>{formatDate(end, siteMetadata.locale)}</time>
                    <br />
                    {/* {authors?formatNames(authors):null},{' '} */}
                    {collaboration ? 'Collaboration with ' + formatNames(collaboration) : null}
                  </span>
                  <p>
                    {link ? (
                      <Link
                        className="rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                        href={link}
                      >
                        {' '}
                        [link]{' '}
                      </Link>
                    ) : null}
                    {video ? (
                      <Link
                        className="animate-shaking rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                        href={video}
                      >
                        {' '}
                        [video]{' '}
                      </Link>
                    ) : null}
                  </p>
                </h2>

                {/* <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div> */}
              </div>
              {/* <BodyText>{summary}</BodyText> */}
            </div>
            {/* <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div> */}
          </div>
        </div>
      </article>
    </li>
  )
}

function TechnicalItem(post) {
  const {
    slug,
    exhibition,
    artist,
    role,
    start,
    end,
    gallery,
    city,
    authors,
    collaboration,
    award,
    title,
    summary,
  } = post
  return (
    <li key={slug} className="py-6">
      <article>
        <div className="space-y-1">
          {/* <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </dd>
          </dl> */}
          <div>
            <div className="space-y-1">
              <div>
                <h2 className="">
                  <span className="font-bold">
                    {title}
                    {', '}
                    {artist}
                    {', '}
                    {exhibition}
                    {', '}
                    {gallery == '' ? '' : gallery + ', '}
                    {city}
                    {', '}
                    <time dateTime={start}>{formatDate(start, siteMetadata.locale)}</time> {' - '}
                    <time dateTime={end}>{formatDate(end, siteMetadata.locale)}</time>
                    <br />
                    {/* {authors?formatNames(authors):null},{' '} */}
                    {/* Collaboration with {collaboration ? formatNames(collaboration) : null} */}
                  </span>
                </h2>

                {/* <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div> */}
              </div>
              <BodyText>{role}</BodyText>
            </div>
            {/* <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div> */}
          </div>
        </div>
      </article>
    </li>
  )
}

function OtherItem(post) {
  const { slug, category, collaboration, link, video, title, summary } = post
  return (
    <li key={slug} className="py-6">
      <article>
        <div className="space-y-1">
          {/* <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </dd>
          </dl> */}
          <div>
            <div className="space-y-1">
              <div>
                <h2 className="">
                  <span className="font-bold">
                    {title}, {category}
                    <br />
                    {/* {authors?formatNames(authors):null},{' '} */}
                    {collaboration ? 'Collaboration with ' + formatNames(collaboration) : null}
                  </span>
                </h2>

                {/* <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div> */}
                <p>
                  {link ? (
                    <Link
                      className="rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                      href={link}
                    >
                      {' '}
                      [link]{' '}
                    </Link>
                  ) : null}
                  {video ? (
                    <Link
                      className="animate-shaking rounded-sm p-0.5 leading-8 tracking-tight text-gray-400 hover:bg-green-600 hover:text-black"
                      href={video}
                    >
                      {' '}
                      [video]{' '}
                    </Link>
                  ) : null}
                </p>
              </div>
              {/* <BodyText>{summary}</BodyText> */}
            </div>
            {/* <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div> */}
          </div>
        </div>
      </article>
    </li>
  )
}

export default function Home({
  papers,
  posterdemos,
  presentations,
  unpublished,
  artworks,
  technicals,
  others,
}) {
  return (
    <>
      <div className="mb-0 space-y-2 pb-0 pr-4 pt-4 text-sm tracking-tight text-black md:space-y-8">
        <h1 className="sticky top-0 w-14 pt-2 font-black xl:w-28">{siteMetadata.title} </h1>
        <p>{siteMetadata.description}</p>

        <div className="py-12">
          <h2 className=" top-0 pb-6 pt-1 text-xl">
            {'Palimpsest Technology'.split('').map((char, i, arr) => (
              <span
                key={i}
                className="animate-wave-bold inline"
                style={{
                  animationDelay: `${i * 1}s`,
                  animationDuration: `${arr.length * 1}s`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
          <News />
        </div>
      </div>
    </>
  )
}
