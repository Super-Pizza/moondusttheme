/**
 * @typedef {import("../../../shared/meta.js").Meta} Meta
 * @typedef {import("../../colors/themes.js").Syntax} Syntax
 */

/**
 * @returns {Meta}
 */
export function meta() {
  return {
    name: "makefile",
    scope: "source.makefile",
    grammars: ["https://github.com/microsoft/vscode/tree/1.87.0/extensions/make/syntaxes/make.tmLanguage.json"]
  }
}

/**
 * @param {Syntax} s
 * @returns {Record<string, string>}
 */
export function tokenColors(s) {
  const c0 = s.comment[0]
  const p0 = s.plain[0]
  const p1 = s.plain[1]

  return {
    "comment.line.number-sign.makefile constant.character.escape.continuation.makefile": c0,
    "comment.line.number-sign.makefile": c0,
    "constant.character.escape.continuation.makefile": p0,
    "constant.other.placeholder.makefile": p0,
    "keyword.control.-.makefile": p0,
    "keyword.control.@.makefile": p0,
    "keyword.control.+.makefile": p0,
    "keyword.control.define.makefile": p0,
    "keyword.control.else.makefile": p0,
    "keyword.control.endif.makefile": p0,
    "keyword.control.export.makefile": p0,
    "keyword.control.ifdef.makefile": p0,
    "keyword.control.ifeq.makefile": p0,
    "keyword.control.ifndef.makefile": p0,
    "keyword.control.ifneq.makefile": p0,
    "keyword.control.include.makefile": p0,
    "keyword.control.override.makefile": p0,
    "keyword.control.private.makefile": p0,
    "keyword.control.undefine.makefile": p0,
    "keyword.control.unexport.makefile": p0,
    "keyword.control.vpath.makefile": p0,
    "punctuation.definition.variable.makefile": p0,
    "punctuation.separator.delimeter.comma.makefile": p0,
    "punctuation.separator.key-value.makefile": p0,
    "source.makefile": p1,
    "support.function.target.DEFAULT.makefile": p0,
    "support.function.target.DELETE_ON_ERROR.makefile": p0,
    "support.function.target.EXPORT_ALL_VARIABLES.makefile": p0,
    "support.function.target.IGNORE.makefile": p0,
    "support.function.target.INTERMEDIATE.makefile": p0,
    "support.function.target.LOW_RESOLUTION_TIME.makefile": p0,
    "support.function.target.NOTPARALLEL.makefile": p0,
    "support.function.target.ONESHELL.makefile": p0,
    "support.function.target.PHONY.makefile": p0,
    "support.function.target.POSIX.makefile": p0,
    "support.function.target.PRECIOUS.makefile": p0,
    "support.function.target.SECONDARY.makefile": p0,
    "support.function.target.SECONDEXPANSION.makefile": p0,
    "support.function.target.SILENT.makefile": p0,
    "support.function.target.SUFFIXES.makefile": p0
  }
}
