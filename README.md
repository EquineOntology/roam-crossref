[![Project Status: WIP – Initial development is in progress, but it's far from finished](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

# roam-crossref

A [RoamResearch](https://roamresearch.com) helper to pull data about a DOI from [crossref.org](https://crossref.org).

## Usage

To include it in a Roam page, simply paste the following (and change the `YOUR_DOI` part for, well, the DOI you want to use).

`{{iframe: https://equineontology.github.io/roam-crossref/?doi=YOUR_DOI}}`

## FAQs

**Why not implement this as a `[[roam/js]]` plugin?**

In principle I'm not opposed to it, and it might come in the future. Right now it's too laborious to setup and update for a non-programmer, so I opted for the much simpler iframe option.
