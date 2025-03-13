import React from 'react';

const ElectronicPublicNotice: React.FC = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-8">電子公告</h1>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">
                            最新の公告
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            2025年3月31日更新
                        </p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">公告内容</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    2025年4月1日設立
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">過去の公告</h3>
                    <ul className="list-disc pl-5">
                        <li>なし</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ElectronicPublicNotice;