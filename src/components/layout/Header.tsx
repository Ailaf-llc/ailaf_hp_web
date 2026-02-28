import React, { useState, useEffect } from 'react';
import { Menu, X as CloseIcon, Linkedin } from 'lucide-react';
import { NoteIcon, XIcon } from '../ui/Icons';
import NavLink from '../ui/NavLink';
import logo from '../../assets/logo.png';

const companyName = "アイラフ合同会社 Ailaf LLC";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // 重要度中：モバイルメニュー展開時の背面スクロール制御
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-white/80 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#hero" onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center">
                <img src={logo} alt={companyName} className="h-8 w-auto mr-2" />
                <span className="text-xl font-bold text-gray-800">Ailaf LLC</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <NavLink to="#services">事業内容</NavLink>
              <NavLink to="#strengths">選ばれる理由</NavLink>
              <NavLink to="#cases">事例紹介</NavLink>
              <NavLink to="#team">Team</NavLink>
              <NavLink to="#company-profile">会社概要</NavLink>
              
              <div className="flex items-center space-x-5 pl-4 border-l border-gray-200">
                <a href="https://note.com/ailaf_038" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#2cb696] transition-colors duration-300" aria-label="Note">
                  <NoteIcon className="w-10 h-10" />
                </a>
                <a href="https://x.com/Ailafllc202577" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors duration-300" aria-label="X">
                  <XIcon className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/ailaf-llc" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0a66c2] transition-colors duration-300" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <CloseIcon /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-16 md:hidden w-full bg-white border-b shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="#services" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">事業内容</span></NavLink>
            <NavLink to="#strengths" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">選ばれる理由</span></NavLink>
            <NavLink to="#cases" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">事例紹介</span></NavLink>
            <NavLink to="#team" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">Team</span></NavLink>
            <NavLink to="#company-profile" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">会社概要</span></NavLink>
            
            <div className="flex items-center space-x-8 px-3 py-4 mt-2 border-t border-gray-100">
              <a href="https://note.com/ailaf_038" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#2cb696]">
                <NoteIcon className="w-12 h-12" />
              </a>
              <a href="https://x.com/Ailafllc202577" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
                <XIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/ailaf-llc" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0a66c2]">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
