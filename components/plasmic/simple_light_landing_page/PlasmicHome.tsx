// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Uj6Lgx5UzpcUhidLgbKvg
// Component: VMOEtk3HwYK-3
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 2NrTpVi1hu7w9/component
import TopSection from "../../TopSection"; // plasmic-import: G-tEJqSAwpIl7/component
import Section from "../../Section"; // plasmic-import: yduLSAxpPYc--/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: mYOUcFCBUoI-K/component
import Testimonial from "../../Testimonial"; // plasmic-import: I4u0Q3fhCPQEZe/component
import HomeCta from "../../HomeCta"; // plasmic-import: hahwskKZZ64l_/component
import Footer from "../../Footer"; // plasmic-import: -g9rqzjBXTXui/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: VRLY_qLq0WpRE9/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 9Uj6Lgx5UzpcUhidLgbKvg/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: VMOEtk3HwYK-3/css

import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: hmf_ENA9L2ZI_z/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: WsY5qs_jt_LM7z/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: f6tdncoAJxILYv/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: tQJolo7WaK-3iW/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: LMgyLKUtWq3DG5/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: hcJE5HRvXAgQvD/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: XTqvsFbLdKd21e/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: 9F6UR_K2Jj8iwK/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: MDMPA2WPpWr6Kj/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: 9jri_qtB46Mxhf/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: vtL-aViMHUmy0w/icon

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof TopSection>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {
  dataFetches: PlasmicHome__Fetches;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  dataFetches?: PlasmicHome__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.freeBox___4C9Sj)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__irk6M)}
            >
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />

              <TopSection
                data-plasmic-name={"topSection"}
                data-plasmic-override={overrides.topSection}
                className={classNames("__wab_instance", sty.topSection)}
              />

              <Section
                className={classNames("__wab_instance", sty.section__bSC2)}
                subtitle={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
                title={"Explore the solutions"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__yHGsr)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__bYNfs)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__wFijw
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__cxoIx
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__cbd4R
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(defaultcss.all, sty.svg__f7UmM)}
                        role={"img"}
                      />
                    }
                    long={"long" as const}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__pMpbm
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(defaultcss.all, sty.svg___7AZj7)}
                        role={"img"}
                      />
                    }
                    long={"long" as const}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__e6Ag
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(defaultcss.all, sty.svg__fkvux)}
                        role={"img"}
                      />
                    }
                    long={"long" as const}
                    title={"Building the Simple Ecosystem"}
                  />
                </p.Stack>

                <div className={classNames(defaultcss.all, sty.freeBox__f8FxY)}>
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__txkZ2)}
                    role={"img"}
                    src={
                      "/plasmic/simple_light_landing_page/images/simpleProject.png"
                    }
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___2ZQui)}
                    role={"img"}
                    src={"/plasmic/simple_light_landing_page/images/task.png"}
                  />
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox___7Za0V)}>
            <div className={classNames(defaultcss.all, sty.freeBox__dkMfi)} />

            <div className={classNames(defaultcss.all, sty.freeBox__iDv7)}>
              <div className={classNames(defaultcss.all, sty.freeBox__hpH9E)}>
                <Section
                  className={classNames("__wab_instance", sty.section___9Omaf)}
                  subtitle={
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                  }
                  title={"How Simple works"}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__imObz)}
                >
                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__evsJn
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SwapIcon
                        className={classNames(defaultcss.all, sty.svg__ccMuA)}
                        role={"img"}
                      />
                    }
                    title={"Initial Contact"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__zhdFf
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SlotIcon
                        className={classNames(defaultcss.all, sty.svg__kzre0)}
                        role={"img"}
                      />
                    }
                    title={"Discovery Session"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__a5Qfx
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <CycleIcon
                        className={classNames(defaultcss.all, sty.svg__okjhm)}
                        role={"img"}
                      />
                    }
                    title={"Contracting"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__koIzi
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <HammerIcon
                        className={classNames(defaultcss.all, sty.svg__gzqA7)}
                        role={"img"}
                      />
                    }
                    title={"Fast Prototyping"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__emp3T
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <PencilIcon
                        className={classNames(defaultcss.all, sty.svg__mwcc)}
                        role={"img"}
                      />
                    }
                    title={"Design Phase"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__ruSNy
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <LightningIcon
                        className={classNames(defaultcss.all, sty.svg__wcYu)}
                        role={"img"}
                      />
                    }
                    title={"Develop & Launch"}
                  />
                </p.Stack>
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__z2Aez)} />
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__iZswh)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox___2BoBp)}
            >
              <Section
                className={classNames("__wab_instance", sty.section__oMKsL)}
                subtitle={
                  "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__oxchQ)}
              >
                <FacebookLogoIcon
                  className={classNames(defaultcss.all, sty.svg__y2De2)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(defaultcss.all, sty.svg__tcAeu)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(defaultcss.all, sty.svg__hWDeu)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(defaultcss.all, sty.svg__vimg3)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(defaultcss.all, sty.svg__mfXWi)}
                  role={"img"}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />

              <HomeCta
                data-plasmic-name={"homeCta"}
                data-plasmic-override={overrides.homeCta}
                className={classNames("__wab_instance", sty.homeCta)}
              />

              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </p.Stack>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial", "homeCta", "footer"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof TopSection;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHome__Fetches;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
