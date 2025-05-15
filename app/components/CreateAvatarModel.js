import React from 'react'

const CreateAvatarModel = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
                <h2 className="text-xl font-semibold mb-4">Create New Avatar</h2>

                {/* Example form */}
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                    />
                    <input
                        type="url"
                        placeholder="Avatar Image URL"
                        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                    />
                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        Create
                    </button>
                </div>

                <button onClick={onClose} className="absolute top-2 right-4 text-xl font-bold">×</button>
            </div>
        </div>
    )
}

export default CreateAvatarModel
