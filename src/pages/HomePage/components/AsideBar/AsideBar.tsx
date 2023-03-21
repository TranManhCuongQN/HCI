import { NavLink } from 'react-router-dom'
import { IoMdHome } from 'react-icons/io'
import { MdOutlineVideoLibrary, MdOutlineVideoStable } from 'react-icons/md'
import { SiSublimetext } from 'react-icons/si'
import { RxCounterClockwiseClock } from 'react-icons/rx'
import { RiVideoLine } from 'react-icons/ri'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { useContext } from 'react'
import { AppContext } from 'src/context/app.context'
const AsideBar = () => {
  const { showSideBar, showSideBar2xl } = useContext(AppContext)

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-30 h-full w-full overflow-y-auto bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(7,7,7,0.2)] ${
          showSideBar ? 'opacity-1 visible' : 'invisible opacity-0'
        } 2xl:hidden`}
      >
        <div
          className={
            'z-40 flex h-full w-44 flex-shrink-0 flex-col overflow-hidden overflow-y-auto bg-[#ffffff] pl-2 pr-2 dark:bg-[#0f0f0f] min-[375px]:w-52 md:w-64'
          }
        >
          <NavLink
            to=''
            className='mt-16 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727] md:mt-24'
          >
            <IoMdHome className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Trang chủ</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <SiSublimetext className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Short</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <MdOutlineVideoStable className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Kênh đăng ký</span>
          </NavLink>
          <div className='my-4 mx-2 border-t border-t-gray-600' />

          {/* //* */}
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <MdOutlineVideoLibrary className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Thư viện</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <RxCounterClockwiseClock className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Video đã xem</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <RiVideoLine className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Video của bạn</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <AiOutlineClockCircle className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Xem sau</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <BiLike className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Video đã thích</span>
          </NavLink>
          <div className='my-4 mx-2 border-t border-t-gray-600' />

          {/* //* Kênh đăng ký */}
          <span className='text-sm font-semibold text-black dark:text-white'>Kênh đăng ký</span>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.ggpht.com/ytc/AL5GRJVgvAwa9TWshWQm6YFBeCDE7L-xDkOaHPEW9MSkp1I=s88-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full text-black dark:text-white'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>Duy Luân Dễ Thương</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.googleusercontent.com/7o10-AKkYj75pwWRr4BEW2U0pVkJmHgBBUajnzU3F_Hjq7gyDX4K5T8ugiA5JBscYtGbOrhmgg0=s176-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>Được Dev</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>JavaScipt Mastery</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>Hello world</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>Xin chao</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>JavaScipt Mastery</span>
          </NavLink>
        </div>
      </div>

      {/* //* 2xl sreen */}
      <div
        className={`fixed top-0 left-0 z-30 h-full overflow-y-auto dark:bg-[rgba(7,7,7,0.5)] max-2xl:hidden ${
          showSideBar2xl ? 'opacity-1 visible' : 'invisible opacity-0'
        }`}
      >
        <div className={'z-40 flex h-full w-72 flex-shrink-0 flex-col pl-2 pr-2  '}>
          <NavLink
            to=''
            className='mt-24 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <IoMdHome className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Trang chủ</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <SiSublimetext className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Short</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <MdOutlineVideoStable className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Kênh đăng ký</span>
          </NavLink>
          <div className='my-4 mx-2 border-t border-t-gray-600' />

          {/* //* */}
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <MdOutlineVideoLibrary className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Thư viện</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <RxCounterClockwiseClock className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Video đã xem</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <RiVideoLine className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Video của bạn</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <AiOutlineClockCircle className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Xem sau</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <BiLike className='h-6 w-6 text-black dark:text-white' />
            <span className='text-sm font-medium text-black dark:text-white'>Video đã thích</span>
          </NavLink>
          <div className='my-4 mx-2 border-t border-t-gray-600' />

          {/* //* Kênh đăng ký */}
          <span className='text-sm font-semibold text-black dark:text-white'>Kênh đăng ký</span>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.ggpht.com/ytc/AL5GRJVgvAwa9TWshWQm6YFBeCDE7L-xDkOaHPEW9MSkp1I=s88-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>Duy Luân Dễ Thương</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.googleusercontent.com/7o10-AKkYj75pwWRr4BEW2U0pVkJmHgBBUajnzU3F_Hjq7gyDX4K5T8ugiA5JBscYtGbOrhmgg0=s176-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>Được Dev</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>JavaScipt Mastery</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>JavaScipt Mastery</span>
          </NavLink>
          <NavLink
            to=''
            className='mt-2 flex h-full items-end gap-x-4 rounded-xl px-3 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]'
          >
            <img
              src='https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='h-6 w-6 rounded-full'
            />
            <span className='text-sm font-medium text-black line-clamp-1 dark:text-white'>JavaScipt Mastery</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default AsideBar
