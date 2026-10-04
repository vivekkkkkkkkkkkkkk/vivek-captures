import React, { useState } from 'react';
import { INSTAGRAM_POSTS, imgPhotographerAvatar, ARCHIVE_PLATES } from '../../data/plates';
import { Check, Heart, MessageCircle, Bookmark, Share2, Camera, MapPin, X } from 'lucide-react';

interface InstagramFeedScreenProps {
  onOpenInquiry: () => void;
}

export const InstagramFeedScreen: React.FC<InstagramFeedScreenProps> = ({ onOpenInquiry }) => {
  const [selectedPost, setSelectedPost] = useState<(typeof INSTAGRAM_POSTS)[0] | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const stories = [
    { title: "Monsoon '24", active: true },
    { title: 'Tamil Nadu', active: false },
    { title: 'Canopies', active: false },
    { title: 'Darkroom', active: false },
    { title: 'Hasselblad', active: false },
  ];

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-10">
      {/* Profile Header */}
      <div className="border-b border-[#262626] pb-10 mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
          {/* Avatar with gradient ring */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#c5a059] via-[#e9c176] to-[#8e8d8a] shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#131313]">
              <img
                src={imgPhotographerAvatar}
                alt="Vivek"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <h2 className="text-xl font-medium text-[#e5e2e1] flex items-center gap-1.5">
                vivekk.captures
                <span className="w-4 h-4 rounded-full bg-[#c5a059] flex items-center justify-center text-[#131313] text-[9px] font-bold">
                  ✓
                </span>
              </h2>

              <button
                onClick={onOpenInquiry}
                className="label-caps px-4 py-1.5 bg-[#e9c176] text-[#261900] font-semibold text-xs hover:bg-[#ffdea5] transition-colors cursor-pointer"
              >
                Inquire Prints
              </button>

              <button
                onClick={() => alert('Following @vivekk.captures dispatch feed.')}
                className="label-caps px-4 py-1.5 border border-[#353534] text-[#e5e2e1] text-xs hover:border-[#c5a059] transition-colors cursor-pointer"
              >
                Follow
              </button>
            </div>

            {/* Metrics */}
            <div className="flex items-center justify-center sm:justify-start gap-8 text-sm">
              <div>
                <span className="font-semibold text-[#e5e2e1] font-mono">148</span>{' '}
                <span className="text-[#8e8d8a]">posts</span>
              </div>
              <div>
                <span className="font-semibold text-[#e5e2e1] font-mono">34.8K</span>{' '}
                <span className="text-[#8e8d8a]">collectors</span>
              </div>
              <div>
                <span className="font-semibold text-[#e5e2e1] font-mono">412</span>{' '}
                <span className="text-[#8e8d8a]">following</span>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-1 text-xs text-[#a6a5a1] max-w-lg">
              <p className="text-[#e5e2e1] font-medium">Vivek | Fine Art &amp; Heritage Photography</p>
              <p>🌿 Documenting South Indian botanical sanctuaries &amp; ancient stonework</p>
              <p>📷 Hasselblad X2D 100C • Leica M11 Monochrom</p>
              <p className="text-[#c5a059] pt-1">📍 Western Ghats • Tamil Nadu • Kerala</p>
            </div>
          </div>
        </div>

        {/* Stories Highlight Bar */}
        <div className="flex items-center gap-5 sm:gap-8 overflow-x-auto pt-8 pb-2">
          {stories.map((story, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group">
              <div className="w-16 h-16 rounded-full p-0.5 border border-[#444] group-hover:border-[#c5a059] flex items-center justify-center bg-[#1a1a1a] transition-colors">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#222] flex items-center justify-center text-xs font-serif text-[#c5a059]">
                  {story.title.slice(0, 3)}
                </div>
              </div>
              <span className="text-[11px] text-[#a6a5a1] group-hover:text-[#e5e2e1] transition-colors">
                {story.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid of Posts */}
      <div className="grid grid-cols-3 gap-1 sm:gap-4">
        {INSTAGRAM_POSTS.map((post) => {
          const isLiked = likedPosts[post.id];
          return (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="relative aspect-square bg-[#161616] cursor-pointer group overflow-hidden"
            >
              <img
                src={post.image}
                alt="Post thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with likes & comments */}
              <div className="absolute inset-0 bg-[#000]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-1.5">
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'fill-white'}`} />
                  <span className="font-mono">{post.likes + (isLiked ? 1 : 0)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span className="font-mono">{post.comments}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Post Modal Viewer */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-[#080808]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#161616] border border-[#2f2e2d] max-w-4xl w-full flex flex-col md:flex-row max-h-[85vh] overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 z-10 p-1.5 bg-[#000]/70 text-[#e5e2e1] hover:text-[#c5a059]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media side */}
            <div className="md:w-3/5 bg-black flex items-center justify-center">
              <img
                src={selectedPost.image}
                alt="Instagram post"
                className="max-h-[50vh] md:max-h-[85vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Details side */}
            <div className="md:w-2/5 flex flex-col justify-between p-6 bg-[#161616] border-t md:border-t-0 md:border-l border-[#262626] overflow-y-auto">
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-[#262626]">
                  <img
                    src={imgPhotographerAvatar}
                    alt="Vivek"
                    className="w-9 h-9 rounded-full object-cover border border-[#c5a059]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#e5e2e1]">
                      vivekk.captures
                      <span className="text-[#c5a059]">✓</span>
                    </div>
                    <span className="text-[10px] text-[#8e8d8a] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#c5a059]" />
                      {selectedPost.location}
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="py-4 space-y-3 text-xs leading-relaxed text-[#a6a5a1]">
                  <p>
                    <span className="font-semibold text-[#e5e2e1] mr-1.5">vivekk.captures</span>
                    {selectedPost.caption}
                  </p>
                  <p className="font-mono text-[10px] text-[#c5a059]">
                    #hasselblad #leica #fineartphotography #monsoon #westernghats #darkluxegallery
                  </p>
                  <div className="text-[10px] text-[#666] pt-1">{selectedPost.date}</div>
                </div>
              </div>

              {/* Engagement Bar */}
              <div className="pt-4 border-t border-[#262626] space-y-3">
                <div className="flex items-center justify-between text-[#e5e2e1]">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(selectedPost.id)}
                      className="cursor-pointer hover:text-[#e9c176] transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedPosts[selectedPost.id] ? 'fill-red-500 text-red-500' : ''
                        }`}
                      />
                    </button>
                    <MessageCircle className="w-5 h-5 cursor-pointer hover:text-[#e9c176]" />
                    <Share2 className="w-5 h-5 cursor-pointer hover:text-[#e9c176]" />
                  </div>
                  <Bookmark className="w-5 h-5 cursor-pointer hover:text-[#e9c176]" />
                </div>

                <div className="text-xs font-semibold text-[#e5e2e1]">
                  {(
                    selectedPost.likes + (likedPosts[selectedPost.id] ? 1 : 0)
                  ).toLocaleString()}{' '}
                  likes
                </div>

                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenInquiry();
                  }}
                  className="w-full label-caps py-2.5 bg-[#e9c176] text-[#261900] font-semibold text-xs hover:bg-[#ffdea5] transition-colors cursor-pointer"
                >
                  REQUEST PRINT OF THIS SPECIMEN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
