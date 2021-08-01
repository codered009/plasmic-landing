// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Uj6Lgx5UzpcUhidLgbKvg
// Component: KrGuEgPbi_O9Ga
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
import BaseCard from "../../BaseCard"; // plasmic-import: LuOAK2RK5X-muh/component
import Bullet from "../../Bullet"; // plasmic-import: f-oMZxyndHdS9A/component
import LinkButton from "../../LinkButton"; // plasmic-import: nJLOAt030uNj4S/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 9Uj6Lgx5UzpcUhidLgbKvg/projectcss
import * as sty from "./PlasmicPlan.module.css"; // plasmic-import: KrGuEgPbi_O9Ga/css

export type PlasmicPlan__VariantMembers = {};

export type PlasmicPlan__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlan__VariantsArgs;
export const PlasmicPlan__VariantProps = new Array<VariantPropType>();

export type PlasmicPlan__ArgsType = {
  price?: React.ReactNode;
  name?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPlan__ArgsType;
export const PlasmicPlan__ArgProps = new Array<ArgPropType>(
  "price",
  "name",
  "description",
  "children"
);

export type PlasmicPlan__OverridesType = {
  root?: p.Flex<typeof BaseCard>;
};

export interface DefaultPlanProps {
  price?: React.ReactNode;
  name?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicPlan__RenderFunc(props: {
  variants: PlasmicPlan__VariantsArgs;
  args: PlasmicPlan__ArgsType;
  overrides: PlasmicPlan__OverridesType;
  dataFetches?: PlasmicPlan__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__mEtF3)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__tCjvz)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Basic",
            value: args.name,
            className: classNames(sty.slotName)
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__mlWv
                )}
              >
                {"$10"}
              </div>
            ),

            value: args.price
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__z7NA)}
              >
                <Bullet
                  className={classNames("__wab_instance", sty.bullet__rpK1)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__wlyv9)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet___0TFB)}
                />
              </p.Stack>
            ),

            value: args.description
          })}

          <div className={classNames(defaultcss.all, sty.freeBox__bLlXf)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <LinkButton
                  text={"Get started"}
                  type={"outlineBlue" as const}
                />
              ),

              value: args.children
            })}
          </div>
        </p.Stack>
      </div>
    </BaseCard>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof BaseCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlan__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlan__VariantsArgs;
    args?: PlasmicPlan__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPlan__Fetches;
  } & Omit<PlasmicPlan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPlan__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPlan__ArgProps,
      internalVariantPropNames: PlasmicPlan__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */
