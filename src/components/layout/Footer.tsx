import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { NoteIcon, XIcon } from '../ui/Icons';
import NavLink from '../ui/NavLink';
import logo from '../../assets/logo.png';

const companyName = "アイラフ合同会社 Ailaf LLC";
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <img src={logo} alt={companyName} className="h-12 w-auto mb-4 mx-auto" />
          <h3 className="text-white text-lg font-semibold mb-2">{companyName}</h3>
          
          <a 
            href="mailto:contact@ailaf.co.jp" 
            className="inline-flex items-center text-slate-400 hover:text-sky-400 transition-colors duration-300 mb-6"
          >
            <Mail className="w-4 h-4 mr-2" />
            contact@ailaf.co.jp
          </a>

          <div className="flex justify-center items-center space-x-6 mb-8">
            <a 
              href="https://note.com/ailaf_038" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-[#2cb696] transition-transform hover:scale-110 duration-300"
              aria-label="Note"
            >
              <NoteIcon className="w-12 h-12" />
            </a>

            <a 
              href="https://x.com/Ailafllc202577" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-transform hover:scale-110 duration-300"
              aria-label="X"
            >
              <XIcon className="w-6 h-6" />
            </a>

            <a 
              href="https://www.linkedin.com/company/ailaf-llc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-[#0a66c2] transition-transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
          <NavLink to="#services">事業内容</NavLink>
          <NavLink to="#strengths">選ばれる理由</NavLink>
          <NavLink to="#cases">事例紹介</NavLink>
          <NavLink to="#team">Team</NavLink>
          <NavLink to="#company-profile">会社概要</NavLink>
          <NavLink to="#faq">FAQ</NavLink>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm">&copy; {currentYear} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
