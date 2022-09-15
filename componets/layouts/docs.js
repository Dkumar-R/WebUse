import React, { Component } from 'react'
import Link from 'next/link'

const ComponentPage = ({ children }) => {
  return (
    <div className='max-w-8xl mx-auto px-8 '>
        <div className='hidden lg:block fixed z-20 inset-0 right-auto w-60 top-20 left-[max(0px,calc(50%-45rem))] px-8 overflow-y-auto'>
          {/* <div className="main">{children}</div> */}
          <div className="relative  ">
            <div className='grid-flow-col '>
              <aside className=''>
                <ul className=''>
                  <li>
                    <span className='flex items-center mb-3 text-cyan-500'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
                      <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                    </svg>
                      <h5 className='font-semibold text-slate-900 ml-4'>Components</h5>
                    </span>
                    <ul className='space-y-2 border-l border-slate-100 ml-1'>
                      <Link href="/docs/docs-1"><a><li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Accordion</li></a></Link>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Alerts</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Badge</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Breadcrumb</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Buttons</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Botton group</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Card</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Carouseel</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Close button</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Collapse</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Dropdowns</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Modal</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Navbar</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Navs & tabs</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Offcanvas</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Pagination</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Placeholders</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Popovers</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Progress</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Scrollspy</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Spinners</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Toasts</li>
                      <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Tooltips</li>
                    </ul>
                  </li>

                  {/* Start A Forms Section  */}
                  <ul className='mt-10'>
                    <li>
                      <span className='flex items-center mb-3'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-ui-checks text-emerald-500" viewBox="0 0 16 16">
                        <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                        <h5 className='ml-4 font-semibold '>Forms</h5>
                      </span>
                      <ul className='space-y-2 border-l border-slate-200 ml-1'>
                        <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Overview</li>
                        <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Form control</li>
                        <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Select</li>
                        <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Checks & radios</li>
                        <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Range</li>
                        <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Input group</li>
                        <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Floating labels</li>
                        <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Layout</li>
                        <li className='block border-l -ml-px pl-4 border-transparent hover:border-l-fuchsia-500 text-slate-700 hover:text-slate-900 font-medium '>Validation</li>
                      </ul>
                    </li>
                  </ul>

                </ul>
              </aside>
            </div>
          </div>
          </div>

            <div className='lg:pl-56'>
                  <aside className='mt-5 mx-auto  xl:max-w-none'>
                    {children}
                  </aside>
            </div>
        
        <div>
        </div>
    </div>
  )
}

export default ComponentPage
