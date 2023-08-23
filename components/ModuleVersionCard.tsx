import { VersionInfo } from '../data/moduleStaticProps'
import Link from 'next/link'
import { formatDistanceStrict, parseISO } from 'date-fns'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-regular-svg-icons'

export interface ModuleVersionCardProps {
  module: string | string[] | undefined
  version: VersionInfo
}

export const ModuleVersionCard: React.FC<ModuleVersionCardProps> = ({
  module,
  version,
}) => {
  return (
    <li className="border rounded mt-2">
      {version.isYanked && (
        <div
          key={`${version.version}-yanked`}
          className="p-2 mb-2 bg-amber-300"
        >
          <a
            href="https://bazel.build/external/module#yanked_versions"
            className="underline decoration-dashed decoration-gray-500 hover:decoration-black"
          >
            Version yanked
          </a>{' '}
          with comment: <p>{version.yankReason}</p>
        </div>
      )}
      <div className="flex items-stretch gap-4">
        <div className="flex flex-1 justify-between">
          <div className="flex p-2 flex-col gap-2 justify-between border-r hover:border-link-color hover:border-r-4">
            <Link href={`/modules/${module}/${version.version}`}>
              <div className="place-items-center hover:border-gray-800">
                {version.version}
              </div>
            </Link>
            <div className="self-end text-gray-500">
              <a
                href="https://bazel.build/external/module#compatibility_level"
                className="underline decoration-dashed decoration-gray-500 hover:decoration-black"
              >
                compatibility level
              </a>{' '}
              {version.moduleInfo.compatibilityLevel}
            </div>
          </div>
          <div className="flex p-2 justify-end">
            <div className="flex flex-col justify-between items-end">
              <a
                href={`https://github.com/bazelbuild/bazel-central-registry/tree/main/modules/${module}/${version.version}`}
                className="text-link-color hover:text-link-color-hover"
              >
                <FontAwesomeIcon icon={faFileCode} className="mr-2" />
                view registry source
              </a>
              <a
                href={`https://github.com/bazelbuild/bazel-central-registry/commit/${version.submission.hash}`}
                className="text-link-color hover:text-link-color-hover"
                suppressHydrationWarning
              >
                <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                published{' '}
                {formatDistanceStrict(
                  parseISO(version.submission.authorDateIso),
                  new Date(),
                  { addSuffix: true }
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
