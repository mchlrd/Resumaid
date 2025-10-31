import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResumePreview from '../components/ResumePreview';
import Loader from '../components/Loader';
import { ArrowLeftIcon } from 'lucide-react';
import { dummyResumeData } from '../assets/assets';


const Preview = () => {
  const { resumeId } = useParams()
  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState(null);

  const loadResume = async () => {
    setResumeData(dummyResumeData.find(resume => resume._id === resumeId || null))
    setIsLoading(false)
  }

  useEffect(()=>{
    loadResume();
  },[])
  return resumeData ? (
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color}/>
      </div>
    </div>
  ) : (
    <div>
      {isLoading ? <Loader /> : (
        <div className='flex flex-col items-center justify-center h-screen'>
          <p className='text-center text-6xl text-slate-400 font-medium'>Resume not found</p>
          <a href="/" className='mt-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-indigo-400 flex items-center transition-colors'>
            <ArrowLeftIcon className='mr-2 size-4'/>
            go to home page
          </a>
        </div>
      )}
    </div>
  )
}

export default Preview