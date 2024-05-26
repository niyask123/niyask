"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../AceternityUI/3D-cardEffect/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="grid grid-cols-3 px-4 gap-3 items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl">
      <div>
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
      <div>
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
      <div>
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
      
    </div>
  );
}
