import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

// import icons
import CrossIcon from '../icons/cross-icon'

import Button from './button'

const ModalDialog = (props) => {

    const { isOpen, onClose, title, primaryActionText, body, handlePrimaryAction } = props

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='flex justify-between'>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            {title}
                                        </Dialog.Title>
                                        <div className='cursor-pointer' onClick={onClose}>
                                            <CrossIcon sstyle={{ color: 'red' }} />
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        {body}
                                    </div>

                                    <div className="mt-10 flex justify-end gap-x-3">
                                        {primaryActionText && (
                                            <Button onClick={handlePrimaryAction} type={'primary'} text={primaryActionText ? primaryActionText : 'See Cart'} />
                                        )}
                                        <Button onClick={onClose} type={''} text={'OK'} />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ModalDialog
