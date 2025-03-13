import React from 'react';

const TeamMembers: React.FC = () => {
    const members = [
        {
            name: '宮野 聖史',
            role: '代表社員',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
            bio: '経歴や実績を追加してください。',
            achievements: []
        },
        {
            name: '山添 達郎',
            role: '業務執行社員',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
            bio: '経歴や実績を追加してください。',
            achievements: []
        }, {
            name: '田畑 佑樹',
            role: '業務執行社員',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
            bio: '中外製薬でDX推進を担当。多数の外部公演や記事執筆の実績あり。',
            achievements: [
                {
                    title: 'Google Cloud ブログ記事',
                    description: '中外製薬：生成AIを活用して業務効率化と価値創造を推進',
                    link: 'https://cloud.google.com/blog/ja/topics/customers/chugai-pharm-generating-ai-to-drive-operational-efficiency-and-value-creation/'
                },
                {
                    title: 'AWS 導入事例',
                    description: '中外製薬株式会社',
                    link: 'https://aws.amazon.com/jp/solutions/case-studies/chugai-pharm/'
                },
                {
                    title: '中外製薬 note',
                    description: '中外製薬のDX推進室が目指す「デジタル創薬」とは',
                    link: 'https://note.chugai-pharm.co.jp/n/n36583815e96d'
                },
                {
                    title: 'JAGUER 講演',
                    description: 'Healthcare Innovation Summit 2023',
                    link: 'https://jaguer.jp/healthcare20230915/'
                },
                {
                    title: 'EnterpriseZine 記事',
                    description: '中外製薬が挑む「デジタル創薬」',
                    link: 'https://enterprisezine.jp/article/detail/18631?p=5'
                },
                {
                    title: '中外製薬 note',
                    description: '中外製薬のDX推進室が目指す「デジタル創薬」とは',
                    link: 'https://note.chugai-pharm.co.jp/n/n2e7083b32b68?magazine_key=m5745f166b9de'
                },
                {
                    title: 'Google Cloud イベント',
                    description: 'Generative AI Summit 2024',
                    link: 'https://1e100.4watcher365.dev/events/gc/202403_generative-ai-summit-24q1/'
                }
            ]
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
                {members.map((member, index) => (
                    <div key={index} className="mb-16 bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6 flex items-center">
                            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mr-6" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">{member.role}</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">経歴</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{member.bio}</dd>
                                </div>
                                {member.achievements.length > 0 && (
                                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">主な実績</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                {member.achievements.map((achievement, achIndex) => (
                                                    <li key={achIndex} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                        <div className="w-0 flex-1 flex items-center">
                                                            <span className="ml-2 flex-1 w-0 truncate">{achievement.title}</span>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                詳細を見る
                                                            </a>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </dd>
                                    </div>
                                )}
                            </dl>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamMembers;